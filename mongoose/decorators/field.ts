import {MetaUtils} from "../../core/metadata/utils";
import {DecoratorType} from '../../core/enums/decorator-type';
import {Decorators} from '../constants';

export function field(params?: {itemType?: any, primary?: boolean, autogenerated?: boolean, searchIndex?:boolean}) {
    return function (target: Object, propertyKey: string) {
        console.log('field - propertyKey: ', propertyKey, ', target:', target);
        MetaUtils.addMetaData(target,
            {
                decorator: Decorators.FIELD,
                decoratorType: DecoratorType.PROPERTY,
                params: params,
                propertyKey: propertyKey
            });
    }
}