# 工具函数列表

## formatDate
格式化时间为 YYYY-MM-DD 格式

### 用法
```typescript
import { formatDate } from '@zhj92/purchase-utils';

// 默认当前时间
console.log(formatDate()); // "2024-05-20"

// 传入Date对象
console.log(formatDate(new Date(2023, 0, 1))); // "2023-01-01"

// 传入时间戳
console.log(formatDate(1672502400000)); // "2023-01-01"