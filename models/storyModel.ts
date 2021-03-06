﻿import {onetomany, manytoone, manytomany} from '../core/decorators';
import {field, document} from '../mongoose/decorators';
import {Strict} from '../mongoose/enums';
import {BaseModel} from './baseModel';
import {Types} from 'mongoose';
import {BlogSqlModel} from "./blogSqlModel"

@document({ name: 'stories', strict: Strict.true })
export class StoryModel extends BaseModel {

    @field({ primary: true, autogenerated: true })
    _id: Types.ObjectId;

    @field()
    name: String;

    @onetomany({ rel: 'tbl_blog2', itemType: BlogSqlModel, embedded: false, persist: true, eagerLoading: false })
    blogs: Array<BlogSqlModel>;
}

export default StoryModel;