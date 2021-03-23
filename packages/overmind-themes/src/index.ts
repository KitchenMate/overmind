import createTheme from './factory'
import overmindTheme from './overmind'
import reactTheme from './react'
import vueTheme from './vue'
import angularTheme from './angular'

export type Colors = {
  primary: string
  dark: string
  red: string
  white: string
  gray: string
  black: string
}

export interface BaseTheme {
  color: Colors
  padding: {
    none: string
    smallest: string
    smallerer: string
    smaller: string
    small: string
    normal: string
    large: string
  }
  borderRadius: {
    normal: string
    large: string
  }
  fontSize: {
    smallest: string
    small: string
    normal: string
    large: string
    larger: string
    largest: string
  }
}

export interface ThemeInterface extends BaseTheme {
  color: Colors & {
    fade: (color: string, fade: number) => string
    lighten: (color: string, lighten: number) => string
  }
}

export const overmind: ThemeInterface = createTheme(overmindTheme)

export const react: ThemeInterface = createTheme(reactTheme)

export const vue: ThemeInterface = createTheme(vueTheme)

export const angular: ThemeInterface = createTheme(angularTheme)
