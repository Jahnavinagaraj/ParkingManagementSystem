<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="dashboard">
		<html> 
			<body>
				<h2><xsl:value-of select="domain"/></h2>
				<h3><xsl:value-of select="page"/></h3>
				<table border="1" cellspacing="0">
					<tr bgcolor="#A3D8E8">
						<th style="text-align:left">Parking Slot</th>
						<th style="text-align:left">Total</th>
						<th style="text-align:left">Reserved</th>
						<th style="text-align:left">Occupied</th>
						<th style="text-align:left">Available</th>
					</tr>
					<xsl:for-each select="slots/slot">
						<tr>
							<td><xsl:value-of select="parkingslot"/></td>
							<td><xsl:value-of select="total"/></td>
							<td><xsl:value-of select="reserved"/></td>
							<td><xsl:value-of select="occupied"/></td>
							<td><xsl:value-of select="available"/></td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>