"use server"

import { userAgent } from 'next/server'
import { headers } from 'next/headers';

export default async function isMobile() {
	const { device } = userAgent({ headers: headers() });
	return device.type === 'mobile';
}