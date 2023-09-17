import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Category from "../../models/categorySchema.js";

import jsonData from '../../../utils/constants/categories.json' assert { type: 'json' };

const AutoCreateAllCategory = catchAsync(
    async (req, res) => {

        for (const category of jsonData) {
            await Category.create(category);
        }

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Categories inserted successfully!`,
        });
    }
)

export default AutoCreateAllCategory