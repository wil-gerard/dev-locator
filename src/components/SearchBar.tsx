import tw, { styled } from 'twin.macro'
// import { SearchIcon } from '@primer/octicons-react'
 
const SearchBarContainer = styled.header`
    ${tw`flex items-center justify-center bg-secondary-700 p-6 lg:p-10 w-full mb-6 lg:mb-12`}
`



const SearchInput = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;


export const SearchBar = () => {

    return (
        <SearchBarContainer>
            <SearchInput>
                <input type="text" placeholder="Location" />
                <button>Search</button>
            </SearchInput>
        </SearchBarContainer>
    )
}

export default SearchBar;