import { IPostNameRequestBody, IPostNameSuccessResponse } from "IApiResponses";
import { Name } from "../../entity/Name";
import { inspect } from "util";
import { v4 as uuidv4 } from "uuid";
import { formatError, getLogger } from "../../utils/Logger";

export class NameService {
  private logger = getLogger();

  async getName(
    nameDetails: IPostNameRequestBody
  ): Promise<IPostNameSuccessResponse | undefined> {
    const nameId = uuidv4();
    const payload = {
      nameId: nameId,
      name: nameDetails.name,
    };
    const name = Name.create({
      id: payload.nameId,
      name: payload.name,
    });
    try {
      await name.save();
    } catch (err: any) {
      this.logger.error(`Failed to save name ${formatError(err)}`);
      return;
    }

    const result = this.handleSuccessResponse(payload);
    return result;
  }

  async handleSuccessResponse(payload: any): Promise<IPostNameSuccessResponse> {
    this.logger.debug(
      `In handleSucccessResponse for payload ${inspect(payload)}`
    );
    return {
      nameId: payload.nameId,
      fullName: payload.name,
    };
  }
}
