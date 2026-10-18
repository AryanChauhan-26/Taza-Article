/**
 * Calculate reading time in minutes from text content.
 * Average reading speed: 200 words per minute.
 */
export function getReadingTime(content: string): string {
  if (!content) return '1 min read';
  
  // Clean markdown symbols, HTML tags, and excessive spaces
  const clean = content
    .replace(/<[^>]*>/g, '')
    .replace(/[#*`_~\[\]()>-]/g, '')
    .trim();
    
  const words = clean.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  
  return `${minutes} min read`;
}
