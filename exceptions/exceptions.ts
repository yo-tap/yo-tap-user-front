export class NotFoundError extends Error {
  constructor(message: string) {
    super(`NotFoundError : ${message}`)
  }
}

export class ForbiddenError extends Error {
  constructor(message: string) {
    super(`ForbiddenError : ${message}`)
  }
}

export class InvalidConditionError extends Error {
  constructor(message: string) {
    super(`InvalidConditionError : ${message}`)
  }
}
