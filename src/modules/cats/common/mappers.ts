interface ErrorResponse {
  message: string;
}

function toDataResponse<T>(response: T | ErrorResponse) {
  return ((response as ErrorResponse)?.message ? [] : response) as T;
}

export { toDataResponse };
