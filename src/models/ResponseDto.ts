export interface ResponseDto {
  error: {} | null;
  message?: string;
  model?: {} | null;
  status: 'success' | 'error';
}
