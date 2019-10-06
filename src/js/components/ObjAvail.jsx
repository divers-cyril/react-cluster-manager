import React from "react";

import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import clsx from 'clsx';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useTheme } from '@material-ui/styles';

function CircleIcon(props) {
        return (
                <SvgIcon {...props}>
                        <path d="M24 24H0V0h24v24z" fill="none" />
                        <circle cx="12" cy="12" r="8" />
                </SvgIcon>
        )
}

function HomeIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
		</SvgIcon>
	)
}

function ObjAvail(props) {
	const {avail, overall, className} = props
	const theme = useTheme()
	const colors = {
		"running": theme.status.up,
		"up": theme.status.up,
		"stdby up": theme.status.up,
		"down": theme.status.danger,
		"stdby down": theme.status.danger,
		"warning": theme.status.warning,
		"warn": theme.status.warning,
		"n/a": theme.status.notapplicable,
		"undef": theme.status.notapplicable,
	}
	if (!avail) {
		return null
	}
	if (overall) {
		var _overall = overall
	} else {
		var _overall = avail
	}

	var gname = "g-" + avail.replace(/\//, "") + "-" + _overall.replace(/\//, "")
	var handleComponent = svgProps => {
		return (
			<svg {...svgProps}>
				<defs>
					<linearGradient id={gname} gradientTransform="rotate(45)">
						<stop offset="50%" stopColor={colors[avail]} />
						<stop offset="100%" stopColor={colors[_overall]} />
					</linearGradient>
				</defs>
				{React.cloneElement(svgProps.children[0][0], {
				})}
				{React.cloneElement(svgProps.children[0][1], {
					fill: 'url(#' + gname +')',
				})}
			</svg>
		)
	}

	return (
		<CircleIcon
			className={className}
			component={handleComponent}
		/>
	)
}

export {
	ObjAvail
}
