import React, { useRef, useState } from 'react'
import tw, { styled } from 'twin.macro'
import { Octokit } from '@octokit/core'

const SearchBarContainer = styled.header`
    ${tw`flex items-center justify-center bg-secondary-700 p-6 lg:p-10 w-full mb-6 lg:mb-12`}
`

const SearchInput = styled.form`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;


export const SearchBar = () => {

    const usersLocationRef = useRef<HTMLInputElement>(null)
    const [userData, setUserData] = useState(null)
    const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false)
    const [usersNotFound, setUsersNotFound] = useState<boolean>(false)
    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN })



    function handleSubmit() {
        if (
          usersLocationRef.current?.value.trim() === "" ||
          usersLocationRef.current?.value === undefined
        ) {
          setIsInputEmpty(true);
          setUserData(null);
          return;
        }
    
        setIsInputEmpty(false)
        fetchUser(usersLocationRef.current.value)
      }

      const fetchUser = (location: string) => {

        octokit.request(`GET /users`, {
            q: `location:${location}`
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <SearchBarContainer>
            <SearchInput
            onSubmit={e => {
                e.preventDefault()
                handleSubmit()
            }}>
                <label htmlFor="usersLocatin" />
                <input
                    ref={usersLocationRef}
                    name="usersLocation"
                    id="usersLocation"
                    type="text"
                    placeholder="Search GitHub users by location..."
                />
                <button type="submit">
                    Search
                </button>
            </SearchInput>
        </SearchBarContainer>
    )
}

export default SearchBar;