import axios from "axios";
import { LoginFormValuesType } from "../components/Login/Login";
import { UserProfileType } from "../redux/profileReducer";
import { UserType } from "../redux/usersReducer";

type GetUsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string
}

export type CommonResponseType<D> = {
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
    return axiosInstance.get<CommonResponseType<{
      messages: Array<string>
      id: number
      email: string
      login: string
    }>>(`auth/me`)
      .then(response => response.data);
  },
  login: (loginFormData: LoginFormValuesType) => {
    const { login, password, rememberMe = false, captcha = null } = { ...loginFormData }
    return axiosInstance.post<CommonResponseType<{
      userId: number
    }>>(`auth/login`, {
      email: login,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha
    })
      .then(response => response.data)
  },
  logout: () => {
    // после этого запроса сервак удалит куку  
    return axiosInstance.delete<CommonResponseType<{}>>(`auth/login`)
      .then(response => response.data)
  }
}

export const profileAPI = {
  getUserProfile: (userId: number | null) => {
    return axiosInstance.get<UserProfileType>(`profile/${userId}`)
      .then(response => response.data)
  },
  getUserStatus: (userId: number | null) => {
    return axiosInstance.get<string>(`profile/status/${userId}`)
      .then(response => response.data);
  },
  updateUserStatus: (status: string) => {
    return axiosInstance.put<CommonResponseType<{}>>(`profile/status/`, {
      status: status
    })
      .then(response => response.data);
  },
  updateUserAvatar:(photo: File) => {
    const formData = new FormData();
     formData.append("image", photo);
    return axiosInstance.put<CommonResponseType<{photos: {small: string | null, large: string | null}}>>(`profile/photo/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
        .then(response => response.data);
  },
  updateUserInfo: (userData: Partial<UserProfileType> ) => {
    return axiosInstance.put<CommonResponseType<{}>>(`profile`, userData)
      .then(response => response.data)
  }
}

export const securityAPI = {
  getCaptchaUrl: () => {
    return axiosInstance.get<{url: string}>("/security/get-captcha-url")
      .then(response => response.data.url);
  }
}