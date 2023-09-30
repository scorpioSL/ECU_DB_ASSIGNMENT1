import { EntityRepository, Repository } from "typeorm";
import { Unit } from "../entities/unit";

@EntityRepository(Unit)
export class UnitRepository extends Repository<Unit> { }
