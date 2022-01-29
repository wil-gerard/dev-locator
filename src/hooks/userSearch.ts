import { Octokit } from '@octokit/rest'
import { Endpoints, OctokitResponse } from '@octokit/types'
import store from '../store';

export type Users = Endpoints["GET /search/users"]["response"]["data"]["items"]

export type PaginatedUsers = {
  users: Users,
  pageCount: number,
  resultsPerPage: number,
  totalCount: number
}

export type UsersResponse = OctokitResponse<Users>

export const RESULTS_PER_PAGE = 20

export const userSearch = async (location: string, page: number, resultsPerPage = RESULTS_PER_PAGE) => {

  const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN })

  if (!location) {
    return {
      users: [],
      pageCount: 0,
      resultsPerPage,
      totalCount: 0
    }
  }

  const UsersResponse = (await octokit?.search.users({
    q: `location:${location}`,
    per_page: resultsPerPage,
    page
  }))

  const pageCount = Math.ceil(UsersResponse ? (UsersResponse.data.total_count > 1000 ? 1000 : UsersResponse.data.total_count) / RESULTS_PER_PAGE : 1)

  const users = UsersResponse?.data.items as Users

  console.log(UsersResponse.data.total_count)

  console.log("Users", users)

  console.log(pageCount)

  console.log(store.users)

  return {
    users,
    totalCount: UsersResponse?.data.total_count || 0,
    pageCount,
    resultsPerPage
  }
}
