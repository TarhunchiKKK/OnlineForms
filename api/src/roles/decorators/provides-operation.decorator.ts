import { Reflector } from "@nestjs/core";
import { TOperations } from "../types/operations";

export const ProvidesOperation = Reflector.createDecorator<TOperations>();
