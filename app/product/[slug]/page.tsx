import React from 'react'
import SingleProductInfo from '@/components/SingleProductComponents/SingleProductInfo'
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../../../reactQuery/hydrate.client"
import getQueryClient from "../../../reactQuery/getQueryClient"

const ProductPage = async ({ params }: any) => {
  // console.log("params", params);
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <SingleProductInfo params={params} />
    </Hydrate>
  )
}

export default ProductPage