"use server";


import { revalidateTag } from "next/cache";
import { infoDb } from "./types";

export const addProductToDataBase = async (event: FormData) => {
    const product = event.get("product")?.toString()
    const price = event.get("price")?.toString()
     
    if (!product || !price)  return ;

 
 const newProduct: infoDb ={
    head: product,
    text: price,
 }
 const url = "https://652124aea4199548356cd977.mockapi.io/products";
 await fetch(url, {
    method:"POST",
    body:JSON.stringify(newProduct),
    headers:{
        "Content-Type" : "application/json"
    }
 });
revalidateTag("products")
 } 