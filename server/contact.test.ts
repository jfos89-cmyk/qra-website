import { describe, it, expect, vi, beforeEach } from 'vitest';
import { handleContactSubmission } from './contactHandler';
import { Request, Response } from 'express';

// Mock the notifyOwner function
vi.mock('./_core/notification', () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

describe('Contact Form Submission', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let jsonSpy: any;
  let statusSpy: any;

  beforeEach(() => {
    jsonSpy = vi.fn();
    statusSpy = vi.fn().mockReturnValue({ json: jsonSpy });

    mockReq = {
      method: 'POST',
      body: {
        name: 'John Doe',
        company: 'Acme MedTech',
        email: 'john@acme.com',
        message: 'I would like to discuss our compliance needs.',
      },
    };

    mockRes = {
      status: statusSpy,
      json: jsonSpy,
    };
  });

  it('should successfully submit a contact form with all required fields', async () => {
    await handleContactSubmission(mockReq as Request, mockRes as Response);

    expect(statusSpy).toHaveBeenCalledWith(200);
    expect(jsonSpy).toHaveBeenCalledWith({ success: true });
  });

  it('should reject non-POST requests', async () => {
    mockReq.method = 'GET';

    await handleContactSubmission(mockReq as Request, mockRes as Response);

    expect(statusSpy).toHaveBeenCalledWith(405);
    expect(jsonSpy).toHaveBeenCalledWith({ error: 'Method not allowed' });
  });

  it('should return 400 if required fields are missing', async () => {
    mockReq.body = {
      name: 'John Doe',
      company: 'Acme MedTech',
      // Missing email and message
    };

    await handleContactSubmission(mockReq as Request, mockRes as Response);

    expect(statusSpy).toHaveBeenCalledWith(400);
    expect(jsonSpy).toHaveBeenCalledWith({ error: 'Missing required fields' });
  });

  it('should handle errors gracefully', async () => {
    const { notifyOwner } = await import('./_core/notification');
    vi.mocked(notifyOwner).mockRejectedValueOnce(new Error('Notification failed'));

    await handleContactSubmission(mockReq as Request, mockRes as Response);

    expect(statusSpy).toHaveBeenCalledWith(500);
    expect(jsonSpy).toHaveBeenCalledWith({ error: 'Failed to submit contact form' });
  });

  it('should include all form data in the notification', async () => {
    const { notifyOwner } = await import('./_core/notification');

    await handleContactSubmission(mockReq as Request, mockRes as Response);

    expect(notifyOwner).toHaveBeenCalled();
    const callArgs = vi.mocked(notifyOwner).mock.calls[0][0];
    expect(callArgs.title).toContain('John Doe');
    expect(callArgs.content).toContain('john@acme.com');
    expect(callArgs.content).toContain('Acme MedTech');
    expect(callArgs.content).toContain('I would like to discuss our compliance needs.');
  });
});
