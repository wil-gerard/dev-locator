import React, { useRef } from 'react'
import tw, { styled } from 'twin.macro'
import { useSnapshot } from 'valtio'
import store from '../store'
import { userSearch } from '../hooks/userSearch'

const SearchBarContainer = styled.header`
    ${tw`flex items-center justify-center bg-secondary-700 p-6 lg:p-10 w-full`}
`
const SearchInput = styled.form`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300 focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-800 transition duration-300`}
  }
`

export const SearchBar: React.FC = () => {

  const snap = useSnapshot(store)
  userSearch(snap.userLocation, snap.page)

  const usersLocationRef = useRef<HTMLInputElement>(null)

  function handleSubmit() {
    if (null !== usersLocationRef.current && usersLocationRef.current.value !== store.userLocation) {
      store.page = 1
      store.userLocation = usersLocationRef.current.value
    }
  }

  return (
    <SearchBarContainer>
      <SearchInput
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}>
        <input
          aria-label="Search users by location"
          ref={usersLocationRef}
          name="search"
          id="search"
          type="search"
          placeholder="Search by location..."
        />
        <button type="submit">
          Search
        </button>
      </SearchInput>
    </SearchBarContainer>
  )
}

export default SearchBar;