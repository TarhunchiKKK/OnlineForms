import { Reflector } from "@nestjs/core";
import { Operations } from "../types/operations";

export const ProvidesOperation = Reflector.createDecorator<Operations>();
