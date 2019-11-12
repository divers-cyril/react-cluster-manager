import React, { useState, useEffect } from "react";
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { apiGetAny } from "../api.js"

function useCatalogs() {
	const [data, setData] = useState([])
	const { oidcUser } = useReactOidc()

	function getCatalogs() {
		if (data.length > 0) {
			return
		}
                apiGetAny("/catalogs", {}, ($) => {
                        console.log("catalogs", $)
			setData($)
		}, oidcUser)
	}
	useEffect(() => {
		getCatalogs()
	}, [])

	return data
}

export {
	useCatalogs,
}
