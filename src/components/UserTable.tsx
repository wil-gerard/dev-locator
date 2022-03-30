import tw from "twin.macro";
import { ArrowRightIcon, ArrowLeftIcon } from "@primer/octicons-react";
import store from "../store";
import { useSnapshot } from "valtio";

const Content = tw.div`flex flex-col justify-center p-6 text-gray-900 font-semibold`;

const HeaderContainer = tw.header`px-5 py-4 border-b border-gray-900`;

const Header = tw.h2``;

const TableContainer = tw.div`w-full max-w-lg mx-auto shadow-lg rounded bg-gray-100`;

const Table = tw.table`table-auto w-full`;

const TablePadding = tw.div`p-3`;

const TableThead = tw.thead`text-xs font-semibold uppercase bg-gray-200`;

const TableRow = tw.tr``;

const TableHeader = tw.th`p-2 whitespace-nowrap font-semibold text-left`;

const TableBody = tw.tbody`text-sm divide-y divide-gray-900`;

const TableDataCell = tw.td`p-2 whitespace-nowrap`;

const TableDataNameContainer = tw.div`flex items-center`;

const TableDataImage = tw.img`w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 rounded-full`;

const TableDataName = tw.div`font-medium `;

const TableDataMeta = tw.div`font-medium text-gray-100 text-left flex flex-row`;

const TableDataMetaLink = tw.a`flex items-center justify-center rounded shadow cursor-pointer bg-primary-600 transition duration-300 hocus:bg-primary-800 ml-1 py-1 px-2`;

const NavContainer = tw.nav`px-5 py-4 border-t border-gray-900 justify-between flex`;

const NavNextPageIcon = tw(ArrowRightIcon)``;

const NavNextPage = tw.button`cursor-pointer transition duration-300 hover:text-primary-500 disabled:cursor-not-allowed disabled:hover:text-secondary-100 disabled:text-secondary-100`;

const NavPreviousPageIcon = tw(ArrowLeftIcon)``;

const NavPreviousPage = tw(NavNextPage)``;

const NavPageInfo = tw.span``;

export default function UserTable() {
  const snap = useSnapshot(store);

  const handleNextPage = () => {
    if (store.page < store.pageCount) {
      store.page++;
    }
  };

  const handlePreviousPage = () => {
    if (store.page > 1) {
      store.page--;
    }
  };

  return (
    <>
      <Content>
        <TableContainer>
          <HeaderContainer>
            <Header>
              {!snap.error
                ? snap.totalUsersCount === 0
                  ? `Find GitHub users by location...`
                  : `${snap.totalUsersCount} GitHub users found in ${snap.userLocation}`
                : `API rate limit exceeded. Please try again in a few moments...`}
            </Header>
          </HeaderContainer>
          <TablePadding>
            <Table>
              <TableThead>
                <TableRow>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Link</TableHeader>
                </TableRow>
              </TableThead>
              <TableBody>
                {snap.users?.map((user, index) => {
                  return (
                    <TableRow key={index}>
                      <TableDataCell>
                        <TableDataNameContainer>
                          <TableDataImage src={`${user.avatar_url}`} />
                          <TableDataName>{user.login}</TableDataName>
                        </TableDataNameContainer>
                      </TableDataCell>

                      <TableDataCell>
                        <TableDataMeta>
                          <TableDataMetaLink
                            href={user.html_url}
                            target="blank"
                            rel="noopener noreferrer"
                          >
                            Visit profile
                          </TableDataMetaLink>
                        </TableDataMeta>
                      </TableDataCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TablePadding>
          {store.pageCount > 2 ? (
            <NavContainer>
              <NavPreviousPage
                disabled={store.page > 1 ? false : true}
                onClick={handlePreviousPage}
              >
                <NavPreviousPageIcon size={24} />
              </NavPreviousPage>
              <NavPageInfo>
                {`Page ${store.page} of ${store.pageCount}`}
              </NavPageInfo>
              <NavNextPage
                disabled={store.page < store.pageCount ? false : true}
                onClick={handleNextPage}
              >
                <NavNextPageIcon size={24} />
              </NavNextPage>
            </NavContainer>
          ) : null}
        </TableContainer>
      </Content>
    </>
  );
}
