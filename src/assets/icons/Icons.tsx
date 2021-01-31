import React from 'react'

interface IconProps {
  color?: string
  state?: boolean // used for checking if something has been pressed etc.
  size?: string
}

export const SearchIcon: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg height={size} strokeWidth="3" viewBox="0 0 80 80" fill="none">
      <path
        d="M47.4451 47.4983L50.7244 50.7776M50.7249 55.0168L63.4534 67.7487C64.6243 68.9199 66.523 68.9201 67.6941 67.749C68.8649 66.5782 68.865 64.6799 67.6944 63.5089L54.9659 50.777C53.795 49.6058 51.8963 49.6057 50.7252 50.7767C49.5544 51.9476 49.5542 53.8458 50.7249 55.0168Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5967 29.0688C17.3584 22.494 22.494 17.3584 29.0688 15.5967C35.6437 13.8349 42.6591 15.7147 47.4722 20.5278C52.2854 25.341 54.1651 32.3563 52.4034 38.9312C50.6416 45.5061 45.5061 50.6416 38.9312 52.4034C32.3563 54.1651 25.341 52.2854 20.5278 47.4722C15.7147 42.6591 13.8349 35.6437 15.5967 29.0688Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Chevron: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg height={size} viewBox="0 0 80 80" strokeWidth="4" fill="none">
      <path
        d="M68 40C68 55.464 55.464 68 40 68C24.536 68 12 55.464 12 40C12 24.536 24.536 12 40 12C55.464 12 68 24.536 68 40Z"
        stroke={color}
      />
      <path
        d="M27.9814 44.0915L38.3905 33.6824C39.2691 32.8038 40.6938 32.8038 41.5724 33.6824L51.9814 44.0915"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ArrowsCircle: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg height={size} viewBox="0 0 80 80" fill="none" strokeWidth="4">
      <path
        d="M36.584 14.2891C34.1761 14.5544 31.7967 15.1589 29.5185 16.1025C23.1799 18.7281 18.144 23.764 15.5184 30.1025C12.8929 36.4411 12.8929 43.563 15.5184 49.9015C16.9662 53.3967 19.1468 56.4958 21.8746 59.013"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.418 65.7113C44.8258 65.446 47.2053 64.8415 49.4835 63.8978C55.822 61.2723 60.858 56.2363 63.4835 49.8978C66.109 43.5593 66.109 36.4373 63.4835 30.0988C62.0358 26.6037 59.8551 23.5046 57.1273 20.9873"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.584 23.4037V6.5961C36.584 4.89999 38.6347 4.05057 39.834 5.24991L47.4627 12.8786C48.6342 14.0502 48.6342 15.9497 47.4627 17.1212L39.834 24.7499C38.6347 25.9492 36.584 25.0998 36.584 23.4037Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.418 56.5961V73.4037C42.418 75.0998 40.3673 75.9492 39.168 74.7499L31.5393 67.1212C30.3678 65.9497 30.3678 64.0502 31.5393 62.8786L39.168 55.2499C40.3673 54.0506 42.418 54.9 42.418 56.5961Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Heart: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg height={size} viewBox="0 0 80 80" fill="none" strokeWidth="4">
      <path
        d="M49.627 33.8281L39.7279 23.9285L36.8995 21.1C34.274 18.4745 30.713 16.9995 27 16.9995C23.287 16.9995 19.726 18.4745 17.1005 21.1C14.475 23.7255 13 27.2865 13 30.9995C13 34.7125 14.475 38.2735 17.1005 40.899L31.1813 54.9798C31.2016 55.0003 31.222 55.0208 31.2425 55.0413L38.3136 62.1124C39.0946 62.8934 40.3609 62.8934 41.142 62.1124L62.3552 40.8992C64.9807 38.2737 66.4557 34.7127 66.4557 30.9997C66.4557 27.2867 64.9807 23.7257 62.3552 21.1002C59.7297 18.4747 56.1687 16.9997 52.4557 16.9997C48.7427 16.9997 45.1817 18.4747 42.5562 21.1002L39.8008 23.8555"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
