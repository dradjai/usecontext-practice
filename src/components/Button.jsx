
// 1) import useContext
import { useContext } from "react"
// 2) import UserStatus
import { UserStatus } from "../App"

export default function Button() {
  // 3) Use UserStatus
  const [signedIn, setSignedIn] = useContext(UserStatus);
  return(
    <>
      <button onClick={ () => setSignedIn(!signedIn)}>
      {(signedIn ? "Sign Out" : "Sign In")}
    </button>
    </>
  )
}