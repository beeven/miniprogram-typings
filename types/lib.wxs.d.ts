/// <reference no-default-lib="true"/>
/// <reference lib="es5"/>
/// <reference path="./console.d.ts" />

/**
 * 生成 regexp 对象需要使用 getRegExp函数。
 * @param pattern : 正则表达式的内容
 * @param flags ：修饰符`g`: global;`i`: ignoreCase; `m`: multiline
 */
declare function getRegExp(pattern: string, flags?: string): RegExp;

/**
 * 返回一个当前时间的对象。
 */
declare function getDate(): Date;

/**
 * 获取时间
 * @param value  时间
 * milliseconds: 从1970年1月1日00:00:00 UTC开始计算的毫秒数
 * datestring: 日期字符串，其格式为："month day, year hours:minutes:seconds"
 */
declare function getDate(value: number | string): Date;
declare function getDate(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number,
): Date;

declare interface DateConstructor {
    /**
     * wxs 中禁止使用new来构造 Date
     * 使用 `getDate` 代替
     */
    new (...args: any): never;
}

declare interface RegExp {
    /**
     * wxs 中禁止使用new来构造 RegExp
     * 使用 `getRegExp` 代替
     */
    new (...args: any): never;
}
