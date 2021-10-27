import { makeVar } from "@apollo/client";
// makeVar로 전역에서 수정가능한 변수할당
export const isLoggedInVar = makeVar(false);
export const colorModeVar = makeVar("light");
