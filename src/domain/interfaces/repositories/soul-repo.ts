import { SoulRequestModel, SoulResponseModel } from "domain/models";

export interface SoulRepository {
  create(soul: SoulRequestModel): Promise<SoulResponseModel>;
  update(soul: SoulRequestModel): Promise<SoulResponseModel>;
  getSouls(): Promise<SoulResponseModel[]>;
  getSoul(id: number | string): Promise<SoulResponseModel | null>;
}
