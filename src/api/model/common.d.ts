import type { ReactNode } from 'react';

export type ColorType = 'danger' | 'primary' | 'secondary' | 'success';

export interface GenericProviderProps {
  children: ReactNode;
}

export interface PointVerificationOptions {
  flagBone?: boolean;
  kBone?: boolean;
  levelName?: boolean;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface Settings {
  darkMode: boolean;
}

export interface SnackbarData {
  color?: ColorType;
  message: string;
}

/**
 * An interface with methods for classes that need to be validated in order to be used properly.
 */
export interface Verifiable {
  /**
   * Compares this object to another `Verifiable` object.
   * @param another the other `Verifiable` object to compare this object to.
   * @returns whether the objects are equal.
   */
  equals: (another: Verifiable) => boolean;
  /**
   * Validates the object.
   * @returns if the object is valid
   */
  isValid: () => boolean;

  name: string;
}

export type Views = 'home' | 'point' | 'route';
