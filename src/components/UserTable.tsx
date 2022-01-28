import tw from 'twin.macro'
import { ReactComponent as TwitterIcon } from '../assets/twitter-icon.svg'
import { ReactComponent as GitHubIcon } from '../assets/github-icon.svg'

const Content = tw.div`flex flex-col justify-center px-6 text-gray-100`

const HeaderContainer = tw.header`px-5 py-4 border-b border-gray-100`

const Header = tw.h2`font-semibold text-gray-300`

const TableContainer = tw.div`w-full max-w-2xl mx-auto shadow-lg rounded bg-secondary-800`

const Table = tw.table`table-auto w-full`

const TablePadding = tw.div`p-3`

const TableThead = tw.thead`text-xs font-semibold uppercase text-gray-300 bg-secondary-700`

const TableRow = tw.tr``

const TableHeader = tw.th`p-2 whitespace-nowrap font-semibold text-left`

const TableBody = tw.tbody`text-sm divide-y divide-gray-100`

const TableDataCell = tw.td`p-2 whitespace-nowrap`

const TableDataNameContainer = tw.div`flex items-center`

const TableDataImage = tw.img`w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 rounded-full`

const TableDataName = tw.div`font-medium text-gray-100`

const TableDataLocation = tw.div`font-medium text-gray-100 text-left`

const TableDataMeta = tw.div`font-medium text-gray-100 text-left flex flex-row`

const TableDataMetaLink = tw.a`flex items-center justify-center rounded shadow cursor-pointer bg-secondary-600 transition duration-300 hocus:bg-primary-500 w-6 h-6 ml-1 p-0.5`

const TableDataMetaFollow = tw.a`flex items-center justify-center rounded shadow cursor-pointer bg-secondary-600 transition duration-300 hocus:bg-primary-500  ml-1 py-0.5 px-2`

export default function UserTable() {

    let users =
        [
            {
                name: "bob",
                location: "minneapolis, mn",
                twitter: "jimboslice"
            }
        ]

    return (
        <>
            <Content>
                <TableContainer>
                    <HeaderContainer>
                        <Header>
                            {`Showing all GitHub users in...`}
                        </Header>
                    </HeaderContainer>
                    <TablePadding>
                        <Table>
                            <TableThead>
                                <TableRow>
                                    <TableHeader>
                                        Name
                                    </TableHeader>
                                    <TableHeader>
                                        Location
                                    </TableHeader>
                                    <TableHeader>
                                        Links
                                    </TableHeader>
                                </TableRow>
                            </TableThead>
                            <TableBody>
                                {users.map((user, index) => {

                                    return (
                                        <TableRow key={index}>
                                            <TableDataCell>
                                                <TableDataNameContainer>
                                                    <TableDataImage src={``} />
                                                    <TableDataName>
                                                        {user.name}
                                                    </TableDataName>
                                                </TableDataNameContainer>
                                            </TableDataCell>
                                            <TableDataCell>
                                                <TableDataLocation>
                                                    {user.location}
                                                </TableDataLocation>
                                            </TableDataCell>
                                            <TableDataCell>
                                                <TableDataMeta>
                                                    <TableDataMetaFollow href={`http://localhost:4000/twitterfollow?screen_name=${user.twitter}`} >
                                                        Follow on Twitter
                                                        <TwitterIcon />
                                                    </TableDataMetaFollow>
                                                    <TableDataMetaLink href={`https://www.twitter.com/${user.twitter}`} target="blank" rel="noopener noreferrer">
                                                        <TwitterIcon />
                                                    </TableDataMetaLink>
                                                    <TableDataMetaLink href={user.twitter} target="blank" rel="noopener noreferrer">
                                                        <GitHubIcon />
                                                    </TableDataMetaLink>
                                                </TableDataMeta>
                                            </TableDataCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TablePadding>
                </TableContainer>
            </Content>
        </>
    );
};