import { OperationDefinition, ValidOperators } from '../models';
import { getOperation } from '../utils/operations';
import { touchOperation } from './touch-operation';
import { writtenOperation } from './written-operation';

export const registeredOperations: { [key: string]: OperationDefinition } = {
  sum1: getOperationComponent(touchOperation, 'Sum 1', '+', 10),
  sum2: getOperationComponent(writtenOperation, 'Sum 2', '+', 20),
  sum3: getOperationComponent(writtenOperation, 'Sum 3', '+', 100),
  subtraction1: getOperationComponent(touchOperation, 'Subtraction 1', '-', 10),
  subtraction2: getOperationComponent(writtenOperation, 'Subtraction 2', '-', 20),
  subtraction3: getOperationComponent(writtenOperation, 'Subtraction 3', '-', 100),
  multiplication1: getOperationComponent(touchOperation, 'Multiplication 1', '*', 10),
  multiplication2: getOperationComponent(writtenOperation, 'Multiplication 2', '*', 20),
  multiplication3: getOperationComponent(writtenOperation, 'Multiplication 3', '*', 100),
  division1: getOperationComponent(touchOperation, 'Division 1', '/', 10),
  division2: getOperationComponent(writtenOperation, 'Division 2', '/', 20),
  division3: getOperationComponent(writtenOperation, 'Division 3', '/', 100),
};

function getOperationComponent(operationComponent: Function, key: string, operator: ValidOperators, range: number) {
  return {
    title: key,
    component: () => {
      const exercise = getOperation(operator, range);

      return operationComponent(exercise, key);
    },
  };
};
