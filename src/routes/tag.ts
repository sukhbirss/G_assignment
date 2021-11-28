import express from "express";
import { createTag, getAllTags} from "../controllers/tag";
import rateLimit from 'express-rate-limit';

const router = express.Router();

const limiter = rateLimit({
	max: 20,
	windowMs: 1*60*1000,
	message: 'To many request from this ip,please try again  in an hour!'
});


/**
 * @swagger
 * tags:
 *  name: TAG
 *  description: tagCategory end points
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      CreateRequest:
 *        type: object
 *        required:
 *          - name
 *          - objectType
 *          - description
 *        properties:
 *          name:
 *            type: string
 *            description: name of the tag/category/subCategory
 *          objectType:
 *            type: string
 *            description: TAG, CATEGORY, SUBCATEGORY
 *        example:
 *          name: motivation
 *          objectType: "TAG"
 *          description: "description"
 *
 *      CreateResponse:
 *        type: object
 *        example:
 *          success: true
 *          data: response here
 *
 *
 *      GetResponse:
 *        type: object
 *        example:
 *          success: true
 *          data: data
 */

/**
 * @swagger
 * /v2/tag/:
 *  get:
 *    tags: [TAG]
 *    description: get by type
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetResponse'
 */

router.route("/").get(limiter, getAllTags);

/**
 * @swagger
 * /v2/tag/:
 *  post:
 *    tags: [TAG]
 *    description: create a tag
 *    requestBody:
 *      description: Create tag
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateRequest'
 *
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateResponse'
 */

router.route("/").post(createTag);


export default router;
