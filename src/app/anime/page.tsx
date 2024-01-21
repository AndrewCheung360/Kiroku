'use client'
import { useState, useEffect, useRef } from "react";
import { createClient } from "../../../utils/supabase/client";
import { debounce } from "lodash";
import { motion } from "framer-motion";
const supabase = createClient();


export async function getAnime(){
    const { data, error } = await supabase
      .from('anime')
      .select('*')
      .order('mal_score', { ascending: false })
      .limit(20)
    return data
  }

export default function AnimePage() {
  const anime = getAnime();
  console.log(anime)
  return (
    <></>
  )

  
}

