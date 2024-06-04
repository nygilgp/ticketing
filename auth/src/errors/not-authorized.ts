import { CustomError } from './custom-error';

export class NotAuthorized extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not authorized');

    // Only because we are extending a build in class
    Object.setPrototypeOf(this, NotAuthorized.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [
      {
        message: 'Not authorized',
      },
    ];
  }
}
