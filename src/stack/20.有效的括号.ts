export function isValid(str: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    /* 出现 Property 'includes' does not exist on type 'string[]'.ts(2339)
    需要把 target 配置的 高一点 esnext

     */
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else {
      const t = stack[stack.length - 1];
      if (
        (t === '(' && char === ')') ||
        (t === '{' && char === '}') ||
        (t === '[' && char === ']')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const str01 = '(())';
console.log(isValid(str01));
