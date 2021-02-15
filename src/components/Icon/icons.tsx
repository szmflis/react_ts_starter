import React from 'react'
import { BiMicrochip, BiCheckSquare, BiSquare } from 'react-icons/bi'
import { BsArrowRepeat } from 'react-icons/bs'
import { VscGithub } from 'react-icons/vsc'
import { MdSettings, MdLaunch, MdInfoOutline, MdDone, MdDoneAll, MdDeleteForever } from 'react-icons/md'

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
}
