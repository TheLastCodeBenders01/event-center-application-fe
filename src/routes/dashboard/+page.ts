import type {PageLoad} from "./$types"
import {redirect} from "@sveltejs/kit"

export const load: PageLoad = function (){
    redirect(302, "/dashboard/profile")
}