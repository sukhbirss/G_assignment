import Tag from "../models/Tag";
import asyncHandler from "../middleware/async";
import { Request, Response, NextFunction } from "express";
import {  ITagCategory,ITagDocument } from "../Types";


// @desc      Create TAG/CATEGORY/SUBCATEGORY
// @route     POST /v2/tag/
// @access    Private
export const createTag = asyncHandler(
  async (req:Request, res: Response, next: NextFunction) => {
    
    const { name, objectType, description } = req.body;

  	const newTag:ITagDocument = await Tag.create({
		    name,
		    objectType,
        description
		  });

    res.status(201).json({
      success: true,
      data: newTag,
    });
  }
);


// @desc      Get all the items
// @route     GET /v2/tag/
// @access    Private
export const getAllTags = asyncHandler(
  async (req:Request, res: Response, next: NextFunction) => {
    
   const data:ITagDocument[] = await Tag.find({isDisabled:false});

    res.status(200).json({
      success: true,
      data,
    });
  }
);