function solution(myStr) {
    const parts = myStr.split(/[abc]/).filter(Boolean);
    return parts.length === 0 ? ["EMPTY"] : parts;
}