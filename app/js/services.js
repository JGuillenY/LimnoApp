angular.module('limno.services', [])
.service('formulas', function(){
		this.DLC = (Lc, As) => {
			return Lc / ((2 * Math.PI) * (Math.pow(As, .5)))
		}

		this.Pm = (Zm, As, de) => {
			return Zm / Math.pow((As / de), .5)
		}

		this.Dv = (Zp, Zm) => {
			return 3 * (Zp / Zm)
		}

		this.V = (As, Zp) => {
			return As * Zp
		}

		this.Pd = (Zp, As) => {
			return Zp / Math.pow(As, .5)
		}

		this.Zr = (Zm, As) => {
			return 88.6 * Zm / Math.pow(As, .5)
		}

		this.Q = (V, t) => {
			return V/t
		}

		this.TRH = (V, Q) => {
			return V/Q
		}

		this.TSI = (Cl, Pt, Ds) => {
			var c = 9.81 * Math.log(Cl + 30.6)
			var p = 14.421 * Math.log(Pt + 4.15)
			var d = 60 - 4.42 * Math.log(Ds)
			return c, p, d
		}

		this.TSIc = (Cl) => {
			return 9.81 * Math.log(Cl + 30.6)
		}

		this.TSIp = (Pt) => {
			return 14.421 * Math.log(Pt + 4.15)
		}

		this.TSId = (Ds) => {
			return 60 - 4.42 * Math.log(Ds)
		}
	})