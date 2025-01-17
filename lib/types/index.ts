export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ApiResponse<T> = {
  data?: T;
  error?: string;
  status: number;
};