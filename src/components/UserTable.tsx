import tw from 'twin.macro'
import { ArrowRightIcon, ArrowLeftIcon } from '@primer/octicons-react'
import store from '../store'
import { useSnapshot } from 'valtio'

const Content = tw.div`flex flex-col justify-center p-6 text-gray-100`

const HeaderContainer = tw.header`px-5 py-4 border-b border-gray-100`

const Header = tw.h2`font-semibold text-gray-300`

const NavContainer = tw.nav`flex justify-end`

const NavNextPageIcon = tw(ArrowRightIcon)`cursor-pointer transition duration-300 hocus:text-primary-500`

const NavNextPage = tw.button`cursor-pointer transition duration-300 hocus:text-primary-500`

const NavPreviousPageIcon = tw(ArrowLeftIcon)`cursor-pointer transition duration-300 hocus:text-primary-500`

const NavPreviousPage = tw(NavNextPage)``

const TableContainer = tw.div`w-full max-w-lg mx-auto shadow-lg rounded bg-secondary-800`

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

const TableDataMeta = tw.div`font-medium text-gray-100 text-left flex flex-row`

const TableDataMetaLink = tw.a`flex items-center justify-center rounded shadow cursor-pointer bg-secondary-600 transition duration-300 hocus:bg-primary-500  ml-1 py-0.5 px-2`

export default function UserTable() {
    const snap = useSnapshot(store)
    

    const handleNextPage = () => {
        store.page++
    }

    const handlePreviousPage = () => {
        store.page--
    }

    return (
        <>
            <Content>
                <TableContainer>
                    <HeaderContainer>
                        <Header>
                            {snap.totalUsersCount === 0 ? `Go find some devs...` : `${snap.totalUsersCount} GitHub users in ${snap.userLocation}`}
                        </Header>
                        <NavContainer>
                            <NavPreviousPage onClick={handlePreviousPage} >
                                <NavPreviousPageIcon />
                            </NavPreviousPage>
                            <NavNextPage onClick={handleNextPage} >
                                <NavNextPageIcon />
                            </NavNextPage>
                        </NavContainer>
                    </HeaderContainer>
                    <TablePadding>
                        <Table>
                            <TableThead>
                                <TableRow>
                                    <TableHeader>
                                        Name
                                    </TableHeader>
                                    <TableHeader>
                                        Link
                                    </TableHeader>
                                </TableRow>
                            </TableThead>
                            <TableBody>
                                {snap.users?.map((user, index) => {

                                    return (
                                        <TableRow key={index}>
                                            <TableDataCell>
                                                <TableDataNameContainer>
                                                    <TableDataImage src={`${user.avatar_url}`} />
                                                    <TableDataName>
                                                        {user.login}
                                                    </TableDataName>
                                                </TableDataNameContainer>
                                            </TableDataCell>

                                            <TableDataCell>
                                                <TableDataMeta>
                                                    <TableDataMetaLink href={user.html_url} target="blank" rel="noopener noreferrer">
                                                        Visit their profile
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