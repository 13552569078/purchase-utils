/**
 * 格式化时间为 YYYY-MM-DD 格式
 * @param date 可选，传入Date对象或时间戳，默认当前时间
 * @returns 格式化后的日期字符串
 * @example
 * formatDate() => "2024-05-20"
 * formatDate(new Date(2023, 0, 1)) => "2023-01-01"
 */
export function formatDate(date?: Date | number): string {
  const d = date ? new Date(date) : new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
