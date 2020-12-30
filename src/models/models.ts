import { TemplateResult } from 'lit-html';

export type EventHandlerFn = (event: Event) => void;

export type ValidOperators = '+' | '-' | '*' | '/';

export interface OperationDefinition {
  title: string;
  component: (...args) => TemplateResult;
}

export interface Operation {
  num1: number;
  num2: number;
  opt1: number;
  opt2: number;
  opt3: number;
  answer: number;
  operator: string;
}
