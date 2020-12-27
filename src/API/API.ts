import axios from "axios";
import { UserProfileType } from "../redux/profileReducer";
import { UserType } from "../redux/usersReducer";

type GetUsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string
}

type FollowUnfollowUserType = {
  resultCode: number
  messages: string[]
}

type AuthResponseType = {
  resultCode: number
  data: {
    id: number
    email: string
    login: string
  }
}

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "12593e8b-a230-49da-8bc0-827e793858c7"
  }
})

export const getUsersAPI = (currentPage: number = 1, pageSize: number = 10) => {
  return axiosInstance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
}

export const followUserAPI = (userId: number) => {
  return axiosInstance.post<FollowUnfollowUserType>(`follow/${userId}`)
    .then(response => response.data)
}

export const unfollowUserAPI = (userId: number) => {
  return axiosInstance.delete<FollowUnfollowUserType>(`follow/${userId}`)
    .then(response => response.data)
}

export const authMeAPI = () => {
  return axiosInstance.get<AuthResponseType>(`auth/me`)
    .then(response => response.data);
}

export const getUserProfileAPI = (userId: string) => {
  return axiosInstance.get<UserProfileType>(`profile/${userId}`)
    .then(response => response.data)
}