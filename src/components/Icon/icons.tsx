import React from 'react'
import { BiMicrochip, BiCheckSquare, BiSquare, BiChevronDownCircle, BiLinkExternal, BiSearch } from 'react-icons/bi'
import { BsArrowRepeat } from 'react-icons/bs'
import { VscDashboard, VscGithub } from 'react-icons/vsc'
import {
  MdSettings,
  MdLaunch,
  MdInfoOutline,
  MdDone,
  MdDoneAll,
  MdDeleteForever,
  MdClose,
  MdBugReport,
} from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'
import {
  AiOutlineApple,
  AiOutlineUndo,
  CgProfile,
  FaAmazon,
  FaGoogle,
  FaKeyboard,
  FaLinkedinIn,
  IoLogoReddit,
} from 'react-icons/all'

/* importing icons from react-icons lib */
/* each accessible via "type" property on Icon component */
/* so type="github" will point to VscGithub icon, type="microchip" to BiMicrochip and so on */

export const icons = {
  microchip: <BiMicrochip />,
  arrowRepeat: <BsArrowRepeat />,
  github: <VscGithub />,
  settings: <MdSettings />,
  square: <BiSquare />,
  checkedSquare: <BiCheckSquare />,
  launch: <MdLaunch />,
  info: <MdInfoOutline />,
  done: <MdDone />,
  doneAll: <MdDoneAll />,
  delete: <MdDeleteForever />,
  close: <MdClose />,
  chevron: <BiChevronDownCircle />,
  menu: <HiMenu />,
  google: <FaGoogle />,
  amazon: <FaAmazon />,
  reddit: <IoLogoReddit />,
  linkedin: <FaLinkedinIn />,
  apple: <AiOutlineApple />,
  profile: <CgProfile />,
  external: <BiLinkExternal />,
  dashboard: <VscDashboard />,
  keyboard: <FaKeyboard />,
  search: <BiSearch />,
  undo: <AiOutlineUndo />,
  bug: <MdBugReport />,
}
