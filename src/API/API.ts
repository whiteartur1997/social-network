import axios from "axios";
import { UserProfileType } from "../redux/profileReducer";
import { UserType } from "../redux/usersReducer";

type GetUsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string
}

type CommonResponseType<D> = {
  resultCode: number
  messages: Array<string>
  data: D
}

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "12593e8b-a230-49da-8bc0-827e793858c7"
  }
})

export const usersAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 10) => {
    return axiosInstance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  followUser: (userId: number) => {
    return axiosInstance.post<CommonResponseType<{}>>(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollowUser: (userId: number) => {
    return axiosInstance.delete<CommonResponseType<{}>>(`follow/${userId}`)
      .then(response => response.data)
  }
}  

export const authAPI = {
  authMe: () => {
    return axiosInstance.get<CommonResponseType<{data: {
      messages: Array<string>
      id: number
      email: string
      login: string
    }}>>(`auth/me`)
      .then(response => response.data);
  }
}

export const profileAPI = {
  getUserProfile: (userId: string) => {
    return axiosInstance.get<UserProfileType>(`profile/${userId}`)
      .then(response => response.data)
  },
  getUserStatus: (userId: string) => {
    return axiosInstance.get<string>(`profile/status/${userId}`)
      .then(response => response.data);
  },
  updateUserStatus: () => {
    return axiosInstance.put<CommonResponseType<{}>>(`profile/status/`)
      .then(response => response.data);
  }
}