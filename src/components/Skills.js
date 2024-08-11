import React from 'react'
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { SiSemanticuireact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { LuDatabaseBackup } from "react-icons/lu";
import { SiDjango } from "react-icons/si";
import { useContext } from 'react';
import { ColorContext } from '../ColorProvider';

const Skills = () => {
    const {color}=useContext(ColorContext)
  return (
    <div>
   <section
      id="skills"
      className={
        color ? 'container z-10 mx-auto px-4 space-y-6 bg-gradient-to-r from-gray-800 via-gray-900 to-blackpy-8 md:py-12 lg:py-20':'container mx-auto px-4 z-10 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20'
      }
    >

<div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

    <h2 className={
        color ? 'font-bold text-3xl text-white leading-[1.1] sm:text-3xl md:text-5xl':'font-bold text-3xl text-red-600 leading-[1.1] sm:text-3xl md:text-5xl'
    }>Skills</h2>

    <p className={
        color ? 'max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-gray-200 ':'max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'
    }>
    During my academic and professional career, I have developed valuable skills that are essential for creating excellent software.
    </p>

</div>

<div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

    <div
        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className={color ? '' : ''}>
      <ImCss3 className="h-12 w-12 fill-current text-red-600" />
    </div>
            <div className="space-y-2">
                <h3 className="font-bold">HTML || CSS</h3>
                <p className="text-sm text-muted-foreground">
                HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are foundational technologies used to create and style web pages.
                </p>
            </div>
        </div>
    </div>

    <div
        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className={color ? '' : ''}>
      <IoLogoJavascript className="h-12 w-12 fill-current text-red-600" />
    </div>
            <div className="space-y-2">
                <h3 className="font-bold">Javascript</h3>
                <p className="text-sm">Server and Client Components. Use hook.</p>
            </div>
        </div>
    </div>

    <div
        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className={color ? '' : ''}>
      <SiSemanticuireact className="h-12 w-12 fill-current text-red-600" />
    </div>
            <div className="space-y-2">
                <h3 className="font-bold">React || Redux</h3>
                <p className="text-sm text-muted-foreground">
                React Redux is a state management library for React applications. It allows you to manage the global state of your app in a centralized store
                </p>
            </div>
        </div>
    </div>

    <div
        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className={color ? '' : ''}>
      <IoLogoJavascript className="h-12 w-12 fill-current text-red-600" />
    </div>
            <div className="space-y-2">
                <h3 className="font-bold">Components</h3>
                <p className="text-sm text-muted-foreground">UI components built using Radix UI and styled with Tailwind
                    CSS.</p>
            </div>
        </div>
    </div>
    <div
        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className={color ? '' : ''}>
      <SiExpress className="h-12 w-12 fill-current text-red-600" />
    </div>
            <div className="space-y-2">
                <h3 className="font-bold">Express</h3>
                <p className="text-sm">Server and Client Components. Use hook.</p>
            </div>
        </div>
    </div>

    <div
        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className={color ? '' : ''}>
      <LuDatabaseBackup className="h-12 w-12 fill-current text-red-600" />
    </div>
            <div className="space-y-2">
                <h3 className="font-bold">MongoDb || PostgreSql</h3>
                <p className="text-sm text-muted-foreground">Authentication using NextAuth.js and middlewares.</p>
            </div>
        </div>
    </div>

    <div
        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className={color ? '' : ''}>
      <SiDjango className="h-12 w-12 fill-current text-red-600" />
    </div>
            <div className="space-y-2">
                <h3 className="font-bold">Django</h3>
                <p className="text-sm text-muted-foreground">Python Backend Framework </p>
            </div>
        </div>
    </div>

</div>

</section>

    </div>
  )
}

export default Skills