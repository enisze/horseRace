import { get, ref } from 'firebase/database'
import { useCallback } from 'react'
import { User, useSessionContext } from '../src/helpers/SessionContext'
import { db2 } from './Firebase'

export const useGetSessionDataFromFirebase = (sessionId: string) => {
  const sessionUsersRef = ref(db2, `game/${sessionId}/users`)
  const { setPlayers } = useSessionContext()

  return useCallback(async () => {
    const usersObject = await (await get(sessionUsersRef)).val()

    const usersArray: User[] = Object.keys(usersObject).map((user) => {
      return { id: user, name: usersObject[user] }
    })
    setPlayers(usersArray)
  }, [sessionUsersRef])
}
